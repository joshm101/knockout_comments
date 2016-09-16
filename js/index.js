require.config( {
    baseUrl : '',
    paths : {
        components : 'components',
        text: 'js/text'
    }
});

requirejs(["../../js/knockout/knockout-3.4.0", "../../js/text"], function (ko) {

   console.log(ko);
   
   function indexViewModel() {
      this.num = 4;
      this.comments = ko.observableArray([
         {
            username: 'user1',
            commentText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            date: new Date().toLocaleString(),
            score: ko.observable(3),
            voteVisible: ko.observable(false)
         },
         {
            username: 'user000',
            commentText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date: new Date().toLocaleString(),
            score: ko.observable(0),
            voteVisible: ko.observable(false)
         },
         {
            username: 'user2',
            commentText: 'this is another good comment',
            date: new Date().toLocaleString(),
            score: ko.observable(-5),
            voteVisible: ko.observable(false)
         },
         {
            username: 'user3',
            commentText: 'fourth comment',
            date: new Date().toLocaleString(),
            score: ko.observable(19),
            voteVisible: ko.observable(false)
         }
      ]);
   }

   ko.components.register('single-comment', { require: '../../components/single-comment/singleComment' });


   ko.applyBindings(new indexViewModel()); 
});

