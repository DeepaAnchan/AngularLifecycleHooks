# AngularLifecycleHooks
Angular Lifecycle Hooks example


ngOnChanges():
1. Angular calls the ngOnChanges() method of a component or directive whenever it detects changes to the input properties. 
2. The ngOnChanges() method takes an object that maps each changed property name to a SimpleChange object holding the current and previous property values. This hook iterates over the changed properties and logs them.
3. Angular calls the hook only when the value of the input property changes