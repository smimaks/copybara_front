import { Api } from './app/Api.js';
import { Model } from './app/Model.js';
import { View } from './app/View.js';
import { Controller } from './app/Controller.js';

const api = new Api('localhost', 3001);
const model = new Model(api);
const view = new View();
export const controller = new Controller(model, view);
