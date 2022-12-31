# React Module federation example

Module federation with three packages, managed using `npm` workspaces.

Three packages:

![Real case scenario](img/scenario.png)

1. `application` - Host
2. `components` - Bidirectional host. Imports the loading component, applies CSS and then re-exposes it. Also, exposes a rounded button.
3. `loading` - Remote. Exposes a loading component.

Finally, the hll include these two components that will be shown to the user.

## Local dev


```
npm i
npm start
```
