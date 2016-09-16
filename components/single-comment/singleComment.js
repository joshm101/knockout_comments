

require.config( {
    baseUrl : '.'
});

define(["../../js/require/require", "../../js/knockout/knockout-3.4.0"], function(rq, ko) {
   function singleCommentViewModel(params) {
      this.username = params.username;
      this.date = params.date;
      this.commentText = params.commentText;
      this.score = params.score
      this.lastVoteButtons;

      this.upvote = function() {
         this.score(this.score() + 1);
      };
      
      this.downvote = function() {
         this.score(this.score() - 1); 
      };
      
      /*
      
      this.enableVoteButtons = function(el, event) {
         console.log(el);
         console.log(event);
         el.children[4].style.setProperty('visibility', 'visible', 'important');
         this.lastVoteButtons = el.children[4];
      };
      
      this.disableVoteButtons = function(el) {
         this.lastVoteButtons.style.setProperty('visibility', 'hidden', 'important');
      };*/
   };

   return {
      viewModel: singleCommentViewModel,
      // weird path with where text.js is located and how to
      // point it to the actual template
      template:  { require: '../../js/text!../../components/single-comment/single-comment.html' }
   };


});