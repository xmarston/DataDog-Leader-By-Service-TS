import fs from 'fs';
import YAML from 'yaml';
import inquirer from 'inquirer';

import { Role } from './Role';
import { DataDogLeader } from './DataDogLeader';
import { EC2 } from './EC2';

const file = fs.readFileSync('config.yml', 'utf8');
const config = YAML.parse(file)
const profile: string = config['profile'];

const roles = new Role(profile);
const rolesList = roles.getRolesList();

const ddLeader = new DataDogLeader(profile);
const ec2Manager = new EC2(profile);

rolesList.then(data => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role_selection',
        message: 'What project do you want to check?',
        choices: data
      }
    ])
    .then(answers => {
      ddLeader.getLeader(answers.role_selection).then(leader => {
        console.log(`Instance with DataDog agent ${leader}`);
        console.log('Checking status...');
        ec2Manager.getStatusOfInstance(leader).then(status => {
          console.log(`Status: ${status}`);
        })
      });
    });
});
