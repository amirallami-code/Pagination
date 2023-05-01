const listItems = [
    { id: 1, name: '1', family: '1' },
    { id: 2, name: '2', family: '2' },
    { id: 3, name: '3', family: '3' },
    { id: 4, name: '4', family: '4' },
    { id: 5, name: '5', family: '5' },

    { id: 6, name: '6', family: '6' },
    { id: 7, name: '7', family: '7' },
    { id: 8, name: '8', family: '8' },
    { id: 9, name: '9', family: '9' },
    { id: 10, name: '10', family: '10' },

    { id: 11, name: '11', family: '11' },
    { id: 12, name: '12', family: '12' },
    { id: 13, name: '13', family: '13' },
    { id: 14, name: '14', family: '14' },
    { id: 15, name: '15', family: '15' },

    { id: 16, name: '16', family: '16' },
    { id: 17, name: '17', family: '17' }
]

let $ = document

let userListElem = $.getElementById('list')
let paginationElem = $.getElementById('pagination')

let currentPage = 1
let rowsCount = 4

function showUsersList(allUsersArray, userListElem, rowsCount, currentPage) {
    userListElem.innerHTML = ''

    let endIndex = currentPage * rowsCount
    let startIndex = endIndex - rowsCount

    let paginatedUsers = allUsersArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(function (user) {
        let userElement = $.createElement('div')
        userElement.innerHTML = user.name + ' ' + user.family
        userElement.classList.add('item')

        userListElem.append(userElement)
    })
}

function setupPagination(allUsersArray, paginationElem, rowsCount) {

    let pageCount = Math.ceil(allUsersArray.length / rowsCount)

    for (let i = 1; i < pageCount + 1; i++) {
        let btn = pageButtonGenerator(i, allUsersArray)
        paginationElem.append(btn)
    }
}

function pageButtonGenerator(page, allUsersArray) {
    let button = $.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        showUsersList(allUsersArray, userListElem, rowsCount, currentPage)

        let prevBtn = $.querySelector('button.active')
        prevBtn.classList.remove('active')

        button.classList.add('active')
    })

    return button
}

showUsersList(listItems, userListElem, rowsCount, currentPage)
setupPagination(listItems, paginationElem, rowsCount)
