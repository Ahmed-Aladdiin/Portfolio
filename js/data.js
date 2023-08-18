const skillsCards = [
  { //first
    skillInfoID: 'CPP',
    img: 'skill-1',
    imgAlt: 'C plus plus',
    skillInfo: 'C++',
    scrollAnimation: {
      from: 'hide-left-1',
      to: 'show-left-1'
    }
  },
  { //second
    skillInfoID: 'SD',
    img: 'skill-2',
    imgAlt: "Software Engineer",
    skillInfo: 'Software<br>Developer',
    scrollAnimation: {
      from: 'hide-left-1',
      to: 'show-left-1'
    }
  },
  { //third 3
    skillInfoID: 'FE',
    img: 'skill-3',
    imgAlt: 'FrontEnd',
    skillInfo: `
    <ul>
      <li>html</li>
      <li>css</li>
      <li>JavaScript</li>
    </ul>
    `,
    scrollAnimation: {
      from: 'hide-right-1',
      to: 'show-right-1'
    }
  },
  { //4
    skillInfoID: 'GIT',
    img: 'skill-4',
    imgAlt: 'Git',
    skillInfo: 'git',
    scrollAnimation: {
      from: 'hide-right-1',
      to: 'show-right-1'
    }
  },
  { //5
    skillInfoID: 'SK',
    img: 'skill-5',
    imgAlt: 'Soft Skills',
    skillInfo: `
    <ul>
      <li>Communication</li>
      <li>TeamWork</li>
      <li>Flexibility</li>
      <li>Punctuality</li>
      <li>Scheduling</li>
    </ul>
    `,
    scrollAnimation: {
      from: 'hide-right-1',
      to: 'show-right-1'
    }
  },
  { //6
    skillInfoID: 'GH',
    img: 'skill-6',
    imgAlt: 'GitHub',
    skillInfo: 'git-hub',
    scrollAnimation: {
      from: 'hide-left-1',
      to: 'show-left-1'
    }
  },
  { //7
    skillInfoID: 'JAVA',
    img: 'skill-7',
    imgAlt: 'Java',
    skillInfo: 'Java',
    scrollAnimation: {
      from: 'hide-right-1',
      to: 'show-right-1'
    }
  },
  { //8
    skillInfoID: 'LA',
    img: 'skill-8',
    imgAlt: 'Languages',
    skillInfo: '<pre>&bull;Arabic   &bull;English   &bull;German</pre>',
    scrollAnimation: {
      from: 'hide-left-1',
      to: 'show-left-1'
    }
  },
  { // 9
    skillInfoID: 'MO',
    img: 'skill-9',
    imgAlt: 'Microsoft Office',
    skillInfo: `
    <ul>
      <li>word</li>
      <li>excel</li>
      <li>powerpoint</li>
    </ul>
    `,
    scrollAnimation: {
      from: 'hide-left-1',
      to: 'show-left-1'
    }
  },
  {
    skillInfoID: 'AR',
    img: 'skill-10',
    imgAlt: 'Arduino',
    skillInfo: 'Arduino',
    scrollAnimation: {
      from: 'hide-right-1',
      to: 'show-right-1'
    }
  }
];

const myProjects = [
  { //first
    image: "imgs/projects/aron-marinelli-DrsE-J_d0mw-unsplash.jpg",
    alt: "small red racon on a tree",
    details: "Pellentesque et dictum ante. Pellentesque suscipit quis nisl id hendrerit. Nunc aliquet congue felis congue posuere. Mauris ultricies odio ante, nec lacinia ligula hendrerit vel. Pellentesque laoreet tincidunt est. Nulla sagittis eros sodales, scelerisque erat in, facilisis diam. Proin ut accumsan turpis. Morbi in rutrum purus. Suspendisse condimentum, tellus nec sodales pretium, lacus eros congue lorem, eget fringilla ante nulla at ligula. Praesent iaculis tellus eget turpis euismod dictum. Vestibulum et est quam. Morbi eget lorem scelerisque, egestas dolor semper, interdum mauris. In eu tincidunt dui. Donec laoreet nisi quam, sit amet interdum mauris mattis in.",
    type: "Animal"
  },
  { //second
    image: "imgs/projects/denys-nevozhai-7nrsVjvALnA-unsplash.jpg",
    alt: "Crossing bridges in china",
    details: "Proin malesuada elementum dapibus. Praesent nec aliquet ex. Praesent ut facilisis magna, nec pretium sapien. Mauris tincidunt fermentum erat eu semper. Morbi imperdiet eget lorem vel pharetra. Nullam lacinia, odio quis pharetra accumsan, justo lectus venenatis ipsum, ut ullamcorper tortor risus eu tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin non pellentesque lacus, non commodo enim. Nullam volutpat aliquam dolor ut bibendum. Etiam mollis magna sem, semper gravida ipsum hendrerit ac. Sed accumsan nulla vitae egestas venenatis. Pellentesque in hendrerit mauris. Donec cursus tellus id commodo volutpat. Sed felis orci, semper et turpis et, consectetur tristique lectus. Suspendisse suscipit sem non dui dapibus volutpat.",
    type: "City"
  },
  { //third
    image: "imgs/projects/lily-banse--YHSwy6uqvk-unsplash.jpg",
    alt: "Three dishes of cooked meat",
    details: "Mauris eu mollis erat. Etiam aliquet, erat vitae tincidunt consequat, diam neque sollicitudin felis, vel cursus diam ipsum id nibh. Morbi aliquam sagittis feugiat. Suspendisse posuere tincidunt metus, nec congue ante ultricies sed. Proin sit amet lectus at nisl semper feugiat ac sed ante. Nullam lacinia nibh nec libero pulvinar porttitor. Integer vehicula tincidunt metus, non pulvinar ex semper quis. Pellentesque at ipsum sit amet turpis auctor luctus. Suspendisse volutpat tortor vel orci ultricies, sit amet tempor velit fermentum.",
    type: "Food"
  },
  { //fourth
    image: "imgs/projects/vitalii-khodzinskyi-Vc4MjbuzTvY-unsplash.jpg",
    alt: "drums",
    details: "Aliquam tristique dapibus laoreet. Vestibulum scelerisque dui arcu, eget pharetra libero facilisis in. Cras ex mauris, pulvinar eu efficitur quis, vehicula vitae felis. Vivamus volutpat ac massa et fringilla. Quisque finibus sed dolor vel rhoncus. Aliquam vehicula nunc id scelerisque fringilla. Morbi hendrerit vitae neque eu tincidunt. Morbi fringilla id erat eget condimentum. Nulla consectetur sapien id semper efficitur. Donec eu erat eu turpis viverra venenatis interdum et nibh. Phasellus lectus nisl, porttitor non molestie sed, pretium vitae mauris. Aenean a est in arcu fermentum posuere vel nec massa. Fusce efficitur accumsan maximus. Nullam eu pellentesque dolor, condimentum vestibulum arcu. Quisque non turpis ipsum. Sed iaculis mauris urna, quis semper diam pellentesque eu.",
    type: "Music"
  },
  { // fifth
    image: "imgs/projects/jesse-cason-LEWbO3MqUsM-unsplash.jpg",
    alt: "A brown Owl",
    details: "Aliquam porta purus nisi, non rhoncus ipsum consectetur sed. Donec commodo est a nulla finibus luctus. Nulla non sagittis ligula. Pellentesque ornare sem eu enim venenatis, sed suscipit sem convallis. Nullam ac lectus at eros placerat molestie. Mauris cursus volutpat velit, scelerisque aliquam massa fermentum sit amet. Mauris mollis purus felis, at tincidunt diam auctor scelerisque. Sed ac est ut sapien tristique dictum et ac ipsum. Ut sem lacus, vulputate non ex eu, iaculis convallis enim. Cras at placerat metus. Etiam non scelerisque tortor, ut consequat arcu. Nulla in ante vitae est tristique auctor.",
    type: "Animal"
  },
  { // sixth
    image: "imgs/projects/jezael-melgoza-layMbSJ3YOE-unsplash.jpg",
    alt: "Tokyo at night",
    details: "Fusce condimentum convallis velit, sit amet tempus eros sodales eu. Maecenas in commodo lectus. Nunc pellentesque volutpat dignissim. Duis nec purus posuere, feugiat orci quis, varius tortor. Phasellus sit amet feugiat augue. Etiam semper, justo et mattis fringilla, augue diam ultricies dolor, vel rhoncus quam elit sagittis lorem. Aliquam non leo eget sapien sagittis maximus quis eget nisi. Duis accumsan sit amet mauris ac molestie. Aenean at orci nec diam efficitur faucibus sed vel risus. Integer eleifend volutpat risus tristique mattis. Sed sed magna dapibus eros accumsan pellentesque.",
    type: "City"
  },
  { // seventh
    image: "imgs/projects/rachel-park-hrlvr2ZlUNk-unsplash.jpg",
    alt: "A breakfast fo pancacks and eggs",
    details: "In hac habitasse platea dictumst. Praesent in interdum nunc. Mauris maximus elementum cursus. Nunc placerat interdum elit quis ullamcorper. Suspendisse sed ante vel enim luctus cursus id iaculis nulla. Sed arcu quam, consectetur non consectetur quis, ultricies vel lectus. Duis nec suscipit sem. Aenean tempor elit a massa varius pharetra. Etiam faucibus, libero eget imperdiet ornare, quam magna tempor orci, quis vestibulum nisl tortor ullamcorper enim. Duis eget enim tortor. Mauris vel blandit elit, in mollis odio. Aliquam sit amet consequat elit, sit amet molestie est. Nunc eleifend, urna at malesuada aliquet, lorem sapien consequat leo, non mattis justo arcu ac metus. Aliquam sagittis mattis lorem, ut dignissim libero dapibus a.",
    type: "Food"
  },
  { // eight
    image: "imgs/projects/dawid-zawila--G3rw6Y02D0-unsplash.jpg",
    alt: "Sunset on a valley",
    details: "Aliquam dui nunc, iaculis id aliquet vitae, suscipit sed lorem. Aenean placerat augue sem, a viverra orci porttitor a. Ut dui mi, blandit id velit et, ultricies semper urna. Integer faucibus dictum placerat. Ut vestibulum suscipit nibh quis mollis. Duis suscipit nulla sit amet finibus elementum. Fusce rutrum quam velit, nec euismod est iaculis ornare. Nulla eros tellus, aliquam eu sollicitudin quis, porta ut dui. Nullam luctus vel lacus et pharetra. Curabitur eget rutrum orci. Cras est ipsum, scelerisque et euismod et, volutpat tempus ex. Praesent nulla est, varius ac lacinia id, accumsan vitae purus. Vivamus purus ligula, luctus vitae velit at, varius feugiat erat.",
    type: "Nature"
  }
]

const Reviewers = [
  {
    image: "imgs/testimonies/reviewers/1.jpg",
    name: "Arun Rupesh Maini",
    position: "Youtuber"
  },
  {
    image: "imgs/testimonies/reviewers/2.jpg",
    name: "Andy Sterkowitz",
    position: "Software Developer"
  },
  {
    image: "imgs/testimonies/reviewers/3.jpg",
    name: "Marques Keith Brownlee",
    position: "Youtuber"
  }
]