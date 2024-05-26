// we need a pivot point
// we compare every item to this pivot
// if less, we exchange with the first item that is greater
// if greater, we leave as is
// we swap that pivot with the last item that was smaller
// now the pivot is sorted
// we run quick sort again on the section that was smaller
// we have a new pivot now, the first item, comparing them and excahnign the same way recursively
// we run quick sort on the section that was bigger
// new pivot again, exchanging recursively etc.

// pivot is gonna be a helper function



