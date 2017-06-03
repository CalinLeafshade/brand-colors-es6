# brand-colors-es6

An es6 compatible bundle of brand colors.

This library allows you to include only the brand colors you want in your
webpack bundle

## Usage

```
import { twitter, medium, google } from "brand-colors-es6";

console.log(twitter) // "#55acee"
```

If the naming of the variables is a problem you can do:

```
import { twitter as twitterColor } from "brand-colors-es6";

console.log(twitterColor) // "#55acee"
```

## Thanks

Thanks to [@reimertz](https://twitter.com/reimertz) who maintains [brand-colors](https://github.com/reimertz/brand-colors) upon which this library is based
