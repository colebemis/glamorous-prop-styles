# glamorous-prop-styles

Easily create glamorous components that accept props to enable/disable styles

## Usage

```javascript
import React from 'react';
import glamorous, { ThemeProvider, Div } from 'glamorous';
import propStyles from 'glamorous-prop-styles';

const heading = {
  display: 'block',
  fontFamily: 'inherit',
  fontWeight: '500',
  lineHeight: 1.1,
};

const largerHeading = {
  marginTop: 20,
  marginBottom: 10,
};

const smallerHeading = {
  marginTop: 10,
  marginBottom: 10,
};

const Text = glamorous.span(
  propStyles({
    faded: ({ theme }) => ({ color: theme.colors.faded }),
    fadedExtra: ({ theme }) => ({ color: theme.colors.fadedExtra }),
    superheading: [heading, largerHeading, { fontSize: 36 }],
    heading: [heading, largerHeading, { fontSize: 30 }],
    subheading: [heading, largerHeading, { fontSize: 24 }],
    superstandard: [heading, smallerHeading, { fontSize: 18 }],
    standard: [heading, smallerHeading, { fontSize: 14 }],
    substandard: [heading, smallerHeading, { fontSize: 12 }],
  }),
);

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          faded: '#666',
          fadedExtra: '#888',
        },
      }}
    >
      <Div maxWidth={600} margin="auto">
        <Text>Normal</Text>
        <Text subheading>subheading</Text>
        <Text faded superheading>
          faded superheading
        </Text>
        <Text fadedExtra substandard>
          fadedExtra substandard
        </Text>
      </Div>
    </ThemeProvider>
  );
}
```

## Credit

All credit for the idea and implementation of the `propStyles` function goes to [Kent C. Dodds](https://kentcdodds.com/). View the original [CodeSandbox](https://codesandbox.io/s/AGRRMl63).

## License

`glamorous-prop-styles` is licensed under the [MIT License](https://github.com/colebemis/glamorous-prop-styles/blob/master/LICENSE).