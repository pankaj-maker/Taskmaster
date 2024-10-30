import shortUUID from "short-uuid";
import  startCase  from "lodash/startCase";
import  lowerCase  from "lodash/lowerCase";


export function titleCase(str) {
  return startCase(lowerCase(str))
}
export function randomId(){
  return shortUUID.generate();
}
