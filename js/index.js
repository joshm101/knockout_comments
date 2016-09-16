requirejs(["knockout/knockout-3.4.0", "../components/single-comment/singleComment"], function (ko) {

   console.log(ko);
   
   function indexViewModel() {
      this.num = 4;
   }

   ko.components.register('single-comment', { require: '../../components/single-comment/singleComment' });


   ko.applyBindings(new indexViewModel()); 
});

