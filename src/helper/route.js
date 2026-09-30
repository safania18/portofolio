import routes from "../routes/web";

export const route = (name, params = {}) => {
  const foundRoute = routes.find((route) => route.name === name);
  if (!foundRoute) throw new Error(`Route with name ${name} not found`);

  let path = foundRoute.path;
  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, params[key]);
  });

  return path;
};
