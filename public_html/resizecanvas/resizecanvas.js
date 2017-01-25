var canvas = null;
var context = null;
var maxSize = 200;
var img = new Image();
var app = {
    
    init: function () {
        var button = document.getElementById('button1');
        button.addEventListener('click', function () {
            app.resize();
        });

        canvas = document.getElementById("canvas1");
        context = canvas.getContext("2d");
        img.src = "test.jpg";
        img.onload = function() {
          context.drawImage(img, 0, 0);
        };
    },
    
    resize: function () {
      
        var imgWidth = 0;
        var imgHeight = 0;
        if (img.width >= img.height) {
            imgWidth = maxSize;
            imgHeight = ((img.height * maxSize) / img.width).toFixed(0);
        } else {
            imgWidth = ((img.width * maxSize) / img.height).toFixed(0);
            imgHeight = maxSize;
        }
        canvas.width = imgWidth;
        canvas.height = imgHeight;

        context.drawImage(img, 0, 0, img.width, img.height, 
                               0, 0, imgWidth, imgHeight
                          );
    }

};

window.onload = function () {
    app.init();
};
    
 