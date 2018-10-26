* The ReallyBigButton is just a <a target="_blank" href="https://material-ui.com/demos/buttons/">material-ui</a> button on steroids.

Default
```js
  const style = {style:{marginRight: 20}};
  <>
	  <ReallyBigButton {...style}>
	    Default
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="primary">
	    Primary
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="secondary">
	    Secondary
	  </ReallyBigButton>
  </>
```

Outlined
```js
  const style = {variant: 'outlined', style:{marginRight: 20}};
  <>
	  <ReallyBigButton {...style}>
	    Default
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="primary">
	    Primary
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="secondary">
	    Secondary
	  </ReallyBigButton>
  </>
```

Contained
```js
  const style = {variant: 'contained', style:{marginRight: 20}};
  <>
	  <ReallyBigButton {...style}>
	    Default
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="primary">
	    Primary
	  </ReallyBigButton>
	  <ReallyBigButton {...style} color="secondary">
	    Secondary
	  </ReallyBigButton>
  </>
```