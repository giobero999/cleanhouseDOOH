




$(document).ready(function() {
  // preparing language file
  var aLangKeys=new Array();
  aLangKeys['en']=new Array();
  aLangKeys['ge']=new Array();


  // ++++++++ navigation +++++++++++
              // EN
  aLangKeys['en']['home']='Home';
  aLangKeys['en']['services']='services';
  aLangKeys['en']['projects']='projects';
  aLangKeys['en']['offers']='offers';
  aLangKeys['en']['creative']='creative';
  aLangKeys['en']['monitoring']='monitoring';
  aLangKeys['en']['contact']='contact';
              //GE
  aLangKeys['ge']['home']='მთავარი';
  aLangKeys['ge']['services']='უპირატესობები';
  aLangKeys['ge']['projects']='არხები';
  aLangKeys['ge']['offers']='რატომ უნდა იაქტიურო';
  aLangKeys['ge']['creative']='კრეატიული სახელმძღვანელო';
  aLangKeys['ge']['monitoring']='მონიტორინგი';
  aLangKeys['ge']['contact']='კონტაქტი';

    // onclick behavior
    $('.lang').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.tr').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
          if(lang === 'en') {
            $('*').addClass('eng-main-font');
          }else if (lang === 'ge') {
              $('*').removeClass('eng-main-font');
          }
        });

    } );

});
