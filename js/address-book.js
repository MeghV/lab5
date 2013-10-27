/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/


/* render()
    inputs the given employee data into the template
    based on the type of information and if it has
    a class in the template

    entries        object with data to input

*/
function render(entries) {
    var template = $(".template");
    var addressBook = $(".address-book");
    addressBook.hide();
    addressBook.empty();
    $.each(entries, function(){
        var newEntry = template.clone();
        newEntry.find(".first").html(this.first);
        newEntry.find(".last").html(this.last);
        newEntry.find(".title").html(this.title);
        newEntry.find(".dept").html(this.dept);
        newEntry.find(".pic").attr({"src": this.pic, "alt":"Picture of " + this.first + " " + this.last});
        newEntry.removeClass("template");
        addressBook.append(newEntry);
        addressBook.fadeIn();
    });
        
}

/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()

