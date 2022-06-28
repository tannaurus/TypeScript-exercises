{

  /* Make sure empty objects are not allowed 
    Hint: use 'never', 'keyof' and '&' to 'include' impossible types
  */
  function printKeys(object: any) {
    console.log(Object.keys(object).join(", "))
  }

  // OK
  {
    printKeys({ a: 1, b: 2 })
    printKeys({ c: "test" })
  }

  // Arrays are not OK:
  {
    printKeys([])
    printKeys([1, 2, 3])
  }

  // Now, make sure, empty objects are not accepted either:
  //  Hint: use 'never', 'keyof' and '&' to 'include' impossible types
  {
    printKeys(null)
    printKeys({})
  }

}