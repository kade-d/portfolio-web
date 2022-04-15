interface BlogResponse {
  feed: Feed;
}

interface Feed {
  entry: Entry[];
  content: DataPoint;
}

interface Entry {
  author: Author[];
  title: DataPoint;
  content: DataPoint;
  media$thumbnail: {
    url: string;
  };
  link: Link[];
}

interface Link {
  title: string;
  href: string;
}

interface Author {
  email: DataPoint;
  name: DataPoint;
  gd$image: Image;
}

interface DataPoint {
  $t: string;
}

interface Image {
  src: string;
}
