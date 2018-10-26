With no data. 
* See code for an example of using recompose's `branch` HOC to extract logic out of a component.
```js
  <Collage />
```

With data
```js
	const data = [
	  {
	    img: "https://placeimg.com/640/480/any?1",
	    title: "Image",
	    author: "author",
	    cols: 2
	  },
	  {
	    img: "https://placeimg.com/640/480/any?2",
	    title: "Image",
	    author: "author",
	    cols: 1
	  },
	  {
	    img: "https://placeimg.com/640/480/any?3",
	    title: "Image",
	    author: "author",
	    cols: 1
	  },
	  {
	    img: "https://placeimg.com/640/480/any?4",
	    title: "Image",
	    author: "author",
	    cols: 2
	  },
	  {
	    img: "https://placeimg.com/640/480/any?5",
	    title: "Image",
	    author: "author",
	    cols: 1
	  },
	  {
	    img: "https://placeimg.com/640/480/any?6",
	    title: "Image",
	    author: "author",
	    cols: 1
	  },
	  {
	    img: "https://placeimg.com/640/480/any?7",
	    title: "Image",
	    author: "author",
	    cols: 1
	  },
	];

  <Collage tileData={data} />
```
Components tends to look better displayed here if they are responsive and fill up width. This one isn't -- it has hard coded width & height.