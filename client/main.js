import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import 'meteor/jkuester:blaze-bs4'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // this is the default BS theme as example
import popper from 'popper.js'
global.Popper = popper // fixes some issues with Popper and Meteor

import './main.html';
import '../lib/collection.js';
import '../lib/accountUI.js';

Template.AddaTask.events({
	'click .js-addtask '(event, instance){	
		$("#addtaskModal").modal("show");
	}

	
})
