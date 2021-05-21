import pimg from '../static/images/process1.png';
import pimg2 from '../static/images/process2.png';
import pimg3 from '../static/images/process3.png';
import pimg4 from '../static/images/process4.png';
import design from '../static/images/design.png';
import develop from '../static/images/develop.png';

let details = {

    "registerUrl" : "https://docs.google.com/forms/u/4/d/e/1FAIpQLSegHbTHrOzzqgYiV1x834y89pGuK8DKUGmqh_SCwy5LMmPPEQ/formResponse",

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
            'carousel-header':'Rishav Jain',
            'carousel-desc':`
            Impressive! How fast my problem got solved, 
            what I was searching in youtube for hours got solved in a few minutes.
            `
        },
        {
            'carousel-header':'Bicky Tamang',
            'carousel-desc':`
            Very well qualified experts. He understood my 
            problem and gave an easy explanation for the solution.
            `
        },
        {
            'carousel-header':'Preety Tiwari',
            'carousel-desc':`
            The expert was amazing, will come back again.
            `
        },
        {
            'carousel-header':'Pratik kumar',
            'carousel-desc':`
            My Expert answered my question promptly and he resolved 
            the issue totally. This is a great service. 
            I am so glad I found it I will definitely use the 
            service again if needed.
            `
        },
        {
            'carousel-header':'Vedant Singh',
            'carousel-desc':`
            My problem got solved. Thanks !
            `
        }
    ]
}


export default details;