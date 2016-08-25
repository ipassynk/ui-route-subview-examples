# ui-route-subview-examples
UI route example with sub-views

### container

- container renders to root ui-view, use resolver to validate permissions. The container has two views: header and main area.

###Page1

- page 1 populates header and main areas views. Also it adds filter into page1 view. 
  Since page1 is child of container (container.page1 state) in order to get to this page 
  the parent reolver should be resolved (for authen purposes)
- page 1 has a child route to display datails that should be refreshed upon the filter change.


###Page2

- page 2 populates header and main areas views. Also it has tabs view. 
  Since page2 is child of container (container.page2 state) in order to get to this page 
  the parent reolver should be resolved (for authen purposes)
- page 2 has multiple child routes (per tab) to display a tab details


