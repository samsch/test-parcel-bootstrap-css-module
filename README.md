# Error using (s)css-modules with Bootstrap.

## To get error

- Clone project.
- Install dependencies with `npm i`.
- Run project with `npm start`.

## Error output

```
🚨  /<project path>/test-parcel-bootstrap-css-module/styles.scss:346:5: Missing whitespace before :global
  344 |     color: #e83e8c;
  345 |     word-break: break-word; }
> 346 |     a > :global code {
      |     ^
  347 |       color: inherit; }
  348 |   :global kbd {
```
