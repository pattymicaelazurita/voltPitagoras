define(function() {

  return {
    /**
         * @function changeImage
         * @description Invoked when user toggles remember me icon
         * @private
         */
    changeImage: function() {
      try {
        if (this.view.imgTCUnselected.isVisible === true) {
          this.view.imgTCUnselected.isVisible  = false;
          this.view.imgTCSelected .isVisible = true;
        } 
        else {
          this.view.imgTCUnselected .isVisible = true;  
          this.view.imgTCSelected.isVisible  = false;
          
        }
        this.view.forceLayout();
      } catch (exception) {
        if(exception.type === "CUSTOM"){
          throw exception;
        }
      }
    } 
  };
});