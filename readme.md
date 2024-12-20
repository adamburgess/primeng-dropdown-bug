steps to reproduce

- run with `ng serve`
- open the dropdown, it should start on option 2800 (out of 3000)
- enter "1"
- the dropdown list is blank (bug)
- edit src/styles.scss and uncomment `padding-top: 1px;` and save
- refresh the page
- open the dropdown, enter "1", it now works
