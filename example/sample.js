import isLoading from '../src';
import './example.scss';

const $ = query => document.querySelector(query);

// Setup the code part
$('body').classList.add('es6');

[...document.querySelectorAll('.code-sample')].forEach(sample => {
    [...sample.querySelectorAll('.tabs li a')].forEach((tab, key) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            if (key === 0) {
                $('body').classList.remove('es5', 'jquery');
                $('body').classList.add('es6');
            } else if (key === 1) {
                $('body').classList.remove('es6', 'jquery');
                $('body').classList.add('es5');
            } else if (key === 2) {
                $('body').classList.remove('es5', 'es6');
                $('body').classList.add('jquery');
            }
        });
    });
});

// Basic example

const basicBtn = $('#basic .btn');
const basicDemoAlert = $('#basic .demo .alert');

basicBtn.addEventListener('click', function (e) {
    isLoading(e.target).loading();

    // Load data or whatever
    basicDemoAlert.classList.remove('alert-success');
    setTimeout(function () {
        // Deactivate the loading script
        isLoading(e.target).remove();

        basicDemoAlert.innerHTML = 'Content Loaded';
        basicDemoAlert.classList.add('alert-success');
    }, 1000);
});

// Disable elements list

// Assuming that we have a login form
const $disableListButton = document.querySelector('#disable-list input[type="submit"]');
const $disableListUsername = document.querySelector('#disable-list #username');
const $disableListPassword = document.querySelector('#disable-list #password');

const disableListOptions = {
    'type': 'switch',        // switch | replace | full-overlay | overlay
    'text': 'login...',      // Text to display in the loader
    'disableSource': true,   // true | false
    'disableList': [$disableListUsername, $disableListPassword]
};

// using a variable
const disableListLoader = isLoading($disableListButton, disableListOptions);
$disableListButton.addEventListener('click', function (e) {
    disableListLoader.loading(); // Start the script

    setTimeout(function () {
        disableListLoader.remove(); // Stop the script
    }, 1000);
});


// Load in tag example

const loadInTagBtn = $('#load-in-div .btn');
const loadInTagDemoAlert = $('#load-in-div .demo .alert');
const loadInTag = isLoading(loadInTagDemoAlert, {
    type: 'target',
    disableList: [loadInTagBtn]
});

loadInTagBtn.addEventListener('click', function (e) {
    // start the loading script
    loadInTag.loading();

    // Load data or whatever
    loadInTagDemoAlert.classList.remove('alert-success');
    setTimeout(function () {
        // Deactivate the loading script
        loadInTag.remove();

        loadInTagDemoAlert.innerHTML = 'Content Loaded';
        loadInTagDemoAlert.classList.add('alert-success');
    }, 1000);
});

// Full overlay

const loadFullOverlayBtn = $('#load-overlay .btn');
const loadFullOverlayDemoAlert = $('#load-overlay .demo .alert');

loadFullOverlayBtn.addEventListener('click', function (e) {
    // start the loading script
    isLoading().loading();

    // Load data or whatever
    loadFullOverlayDemoAlert.classList.remove('alert-success');
    setTimeout(function () {
        // Deactivate the loading script
        isLoading().remove();

        loadFullOverlayDemoAlert.innerHTML = 'Content Loaded';
        loadFullOverlayDemoAlert.classList.add('alert-success');
    }, 1500);
});

// Overlay element

const loadEltOverlayBtn = $('#load-overlay-elt .btn');
const loadEltOverlayDemoAlert = $('#load-overlay-elt .demo .alert');
const loadElt = isLoading(loadEltOverlayDemoAlert, { type: 'overlay' });

loadEltOverlayBtn.addEventListener('click', function (e) {
    // start the loading script
    loadElt.loading();

    // Load data or whatever
    loadEltOverlayDemoAlert.classList.remove('alert-success');
    setTimeout(function () {
        // Deactivate the loading script
        loadElt.remove();

        loadEltOverlayDemoAlert.innerHTML = 'Content Loaded';
        loadEltOverlayDemoAlert.classList.add('alert-success');
    }, 1500);
});