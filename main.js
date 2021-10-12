function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelloaded);
  }
  
  function draw()
  {
    image(video, 0, 0, 300, 300);
    classifier.clssify(video,gotResult);
  }
  
  function modelloaded()
  {
    console.log('model loaded!')
  }
  
  function gotResult(error,result)
  {
    if(error)
    {
      console.error(error);
    }
    else
    {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results [0].label;
      document.getElementById("result_object_name").innerHTML = results [0].confidence.toFixed(3);
    }
  }
  
  