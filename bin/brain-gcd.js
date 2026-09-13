#!/usr/bin/env node

import game from '../src/index.js';
import findGCD, {description} from '../src/games/gcd.js';

game(description, findGCD);
