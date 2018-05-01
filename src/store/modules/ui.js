export default {
  state: {
    isAddDialogOpen: false,
    isDeleteDialogOpen: false
  },
  mutations: {
    openAddDialog: state => {
      state.isAddDialogOpen = true
    },
    closeAddDialog: state => {
      state.isAddDialogOpen = false
    },
    openDeleteDialog: state => {
      state.isDeleteDialogOpen = true
    },
    closeDeleteDialog: state => {
      state.isDeleteDialogOpen = false
    }
  },
  getters: {
    isAddDialogOpen: state => state.isAddDialogOpen,
    isDeleteDialogOpen: state => state.isDeleteDialogOpen
  }
}
