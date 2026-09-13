#!/usr/bin/env node

import game from '../src/index.js';
import isPrime, {description} from '../src/games/prime.js';

game(description, isPrime);
