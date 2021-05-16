import pimg from '../static/images/process1.png';
import pimg2 from '../static/images/process2.png';
import pimg3 from '../static/images/process3.png';
import pimg4 from '../static/images/process4.png';
import design from '../static/images/design.png';
import develop from '../static/images/develop.png';

let details = {
    captions : {
        "RegisterCaption" : "Register by filling the form",
        "VerifyCaption" : "You will get a message from",
        "SessionCaption" : "Ask doubts ans get solutions from experts",
        "PaymentCaption" : "It's free still if you like our service there is a portal for payment"
    },
    
    imageUrl : {
        'RegisterImg' : pimg,
        'VerifyImg' : pimg2,
        'SessionImg' : pimg3,
        'PaymentImg' : pimg4,
    },

    domainsImg : {
        'dimg1' : design,
        'dimg2' : develop
    },

    domainsDesc : {
        'ddesc1' : 
        `Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type specimen 
        book.
        `,
        'ddesc2' : 
        `
        Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry.
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type specimen 
        book.
        `
    },

    BenefitBlock:[
        {block:'Get your doubts solved by verified experts in the field.'},
        {block:'Save your time by getting the solutions directly from experts instead of searching them on the internet.'},
        {block:'We will try to solve you doubts and make you understand through any feasible medium.'},
        {block:'It is a complete free service.'}
    ],

    Comments:[
        {   
            'carousel-header':'Rajiv',
            'carousel-desc':'this is rajiv from pakistan'
        },
        {
            'carousel-header':'Shiba',
            'carousel-desc':'this is shibajyoti das,i am a wannabe GOD!'
        },
        {
            'carousel-header':'Rittik',
            'carousel-desc':'this is rittik dasgupta,i am a wannabe CLOWN!'
        }
    ]
}


export default details;