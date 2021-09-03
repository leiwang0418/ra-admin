basic UserMenu:

```js
import MenuItem from "@material-ui/core/MenuItem";
<UserMenu>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
</UserMenu>;
```

new label message:

```js static
const label = {
        id: "userMenu",
        defaultMessage: "orther message",
};

<UserMenu label={label} />;
```
