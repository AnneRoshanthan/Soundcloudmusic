SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  
  $(document).ready(function() {

    SC.stream('/tracks/752544118',function(sound){
        $('#start1').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop1').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });
        SC.stream('/tracks/371818226',function(sound){
          $('#start2').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop2').click(function(e) {
            e.preventDefault();
            sound.stop();
          }); 
        });

          SC.stream('/tracks/784800565',function(sound){
          $('#start3').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop3').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });

          SC.stream('/tracks/489403410',function(sound){
          $('#start4').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop4').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });
          SC.stream('/tracks/217615268',function(sound){
          $('#start5').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop5').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
        });

          SC.stream('/tracks/871718233',function(sound){
          $('#start6').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          $('#stop6').click(function(e) {
            e.preventDefault();
            sound.stop();
          });

});
    }); 