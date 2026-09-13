#!/usr/bin/env node

import game from '../src/index.js';
import findMissingNumber, {description} from '../src/games/progression.js';

game(description, findMissingNumber);
