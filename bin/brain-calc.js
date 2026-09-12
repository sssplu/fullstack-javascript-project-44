#!/usr/bin/env node

import game from '../src/index.js';
import calc, {description} from '../src/games/calc.js';

game(description, calc);
