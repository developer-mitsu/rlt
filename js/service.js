document.addEventListener('DOMContentLoaded', function(){
    var service_buttons = document.getElementsByClassName("service-detail-button");
        service_buttons[0].addEventListener('click', function(){
        // service_dom = document.getElementById(`js-service${i+1}`);
        if(!service_buttons[0].classList.contains('active')){
            var active_service;
            for(var ii = 0; ii<5; ii++){
                service_dom = document.getElementById(`js-service${ii+1}`)
                if (service_buttons[ii].classList.contains('active')){
                    service_buttons[ii].classList.remove("active");
                    service_dom.classList.remove('active');
                }

            }
            service_buttons[0].classList.add('active');
            document.getElementById("js-service1").classList.add('active');
            eyecatch = document.getElementsByClassName('service-detail__eyecatch');
            eyecatch[0].setAttribute('style', 'background-image:url("img/service/service1.jpg")');

        }
    
    

        // if(!service_dom.classList.contains('active')){
        //     for(var service_detail_description in document.getElementsByClassName('service-detail__description')){
        //         service_detail_description.classList.remove("active");
        //     }
        //     service_dom.classList.add('active');
        // }


    }, false);
    service_buttons[1].addEventListener('click', function(){
        if(!service_buttons[1].classList.contains('active')){
            for(var ii = 0; ii<5; ii++){
                service_dom = document.getElementById(`js-service${ii+1}`)
                if (service_buttons[ii].classList.contains('active')){
                    service_buttons[ii].classList.remove("active");
                    service_dom.classList.remove('active');
                }
            }
        service_buttons[1].classList.add('active');
        document.getElementById("js-service2").classList.add('active');
        eyecatch = document.getElementsByClassName('service-detail__eyecatch');
        eyecatch[0].setAttribute('style', 'background-image:url("img/service/service2.jpg")');
    }
}, false);
    service_buttons[2].addEventListener('click', function(){
        if(!service_buttons[2].classList.contains('active')){
            for(var ii = 0; ii<5; ii++){
                service_dom = document.getElementById(`js-service${ii+1}`)
                if (service_buttons[ii].classList.contains('active')){
                    service_buttons[ii].classList.remove("active");
                    service_dom.classList.remove('active');
                }
            }
        service_buttons[2].classList.add('active');
        document.getElementById("js-service3").classList.add('active');
        eyecatch = document.getElementsByClassName('service-detail__eyecatch');
        eyecatch[0].setAttribute('style', 'background-image:url("img/service/service3.jpg")');
    }
    }, false);
    service_buttons[3].addEventListener('click', function(){
        if(!service_buttons[3].classList.contains('active')){
            for(var ii = 0; ii<5; ii++){
                service_dom = document.getElementById(`js-service${ii+1}`)
                if (service_buttons[ii].classList.contains('active')){
                    service_buttons[ii].classList.remove("active");
                    service_dom.classList.remove('active');
                }
            }
        service_buttons[3].classList.add('active');
        document.getElementById("js-service4").classList.add('active');
        eyecatch = document.getElementsByClassName('service-detail__eyecatch');
        eyecatch[0].setAttribute('style', 'background-image:url("img/service/service4.jpg")');
    }
}, false);
service_buttons[4].addEventListener('click', function(){
    if(!service_buttons[4].classList.contains('active')){
        for(var ii = 0; ii<5; ii++){
            service_dom = document.getElementById(`js-service${ii+1}`)
            if (service_buttons[ii].classList.contains('active')){
                service_buttons[ii].classList.remove("active");
                service_dom.classList.remove('active');
            }
    }
    service_buttons[4].classList.add('active');
    document.getElementById("js-service5").classList.add('active');
    eyecatch = document.getElementsByClassName('service-detail__eyecatch');
    eyecatch[0].setAttribute('style', 'background-image:url("img/service/service5.jpg")');
}
}, false);

});