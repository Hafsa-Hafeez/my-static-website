var data = [
    {  name: 'contact', id: '#contact'},
    {  name: 'feedback', id: '#feedback'},
    {  name: 'faqs', id: '#faqs'},
    {  name: 'location', id: '#loc'},
    {  name: 'queries', id: '#faqs'},
    {  name: 'query', id: '#faqs'}
]

$('.searchbtn').click(function () 
            
        {
            $('#overlay').show() 
            $('#searchoverlay').show()
            $('#searchlist').append ("<ul  ></ul>");
            
            var keyword = $('.searchinput').val().toLowerCase();
            console.log(keyword);
        for (let i = 0; i < data.length; i++) {
            var product = data[i];
            if (product.name.indexOf( keyword) > -1) {
                console.log(product.name.replace(product.name.charAt(0) ,product.name.charAt(0).toUpperCase() ));
                console.log(product.id)
             var text = "<li><a href='"+product.id+"'>"+product.name.replace(product.name.charAt(0) ,product.name.charAt(0).toUpperCase() )+"</a></li>";
             $('#searchlist ul').append(text);
        
            }
        }
        })
        $('#searchlist').click(function () {
                 $('#overlay').hide();
                 $('#searchoverlay').hide();
                 $('.searchinput').val('') ;
             })

          