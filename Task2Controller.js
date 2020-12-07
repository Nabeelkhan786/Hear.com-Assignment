//buildNewAccountOverrideController.js
({
    doInit : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        helper.toggleFourAndFiveSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
         helper.doInit(component, event, helper);

    },
    
    goToStepTwo : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goToStepThree : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step3");
    },
    goToStepFour : function(component, event, helper) {
        helper.toggleThreeAndFourSteps(component);
        component.set("v.progressIndicatorFlag", "step4");
    },
    goToStepFive : function(component, event, helper) {
        helper.toggleFourAndFiveSteps(component);
        component.set("v.progressIndicatorFlag", "step5");
    },
    goBackToStepOne : function(component, event, helper) {
        helper.toggleOneAndTwoSteps(component);
        component.set("v.progressIndicatorFlag", "step1");
    },
    goBackToStepTwo : function(component, event, helper) {
        helper.toggleTwoAndThreeSteps(component);
        component.set("v.progressIndicatorFlag", "step2");
    },
    goBackToStepThree : function(component, event, helper) {
        helper.toggleThreeAndFourSteps(component);
        component.set("v.progressIndicatorFlag", "step3");
    },
    goBackToStepFour : function(component, event, helper) {
        helper.toggleFourAndFiveSteps(component);
        component.set("v.progressIndicatorFlag", "step4");
    },
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "The record has been updated successfully."
        });
        toastEvent.fire();
    }
})