# Catalyst Demo

To run the Catalyst demo, first install the npm dependencies:

```bash
pnpm install
```

Next, run the development server:

```bash
pnpm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

# Tailwind Resources
- https://tailwind-generator.com/generators

# Goals
1. embed an iframe of nocodb
2. 

# Learn
- iframe-resizer
  - https://iframe-resizer.com/
  - https://iframe-resizer.com/frameworks/react/
    - npm install @iframe-resizer/react --save
- with nextjs
  - https://stackoverflow.com/questions/69755112/cross-domain-iframe-resizer-on-nextjs
- with Vue3
  - https://iframe-resizer.com/frameworks/vue3/

iFrame pitfalls
- https://caisy.io/blog/nextjs-iframe-implementation
- iframe best practices: https://blog.logrocket.com/best-practices-react-iframes/

# Iframe

- initial target (you must have nocodb running on local and login to get a valid url), e.g.
```
http://localhost:3000/#/nc/pqkxhv4pe0f9djh/mmsmk4cfu6ljawt/vwlid07r6nawqubg/view
```
- [child page API](https://iframe-resizer.com/api/child/)

## Installing packages into nocodb with pnpm

https://lerna.js.org/docs/recipes/using-pnpm-with-lerna