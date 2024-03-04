// This module handles saving and loading data from storage

// First, check if localStorage is supported and avaible (Thanks Mozilla)

function storageAvaible(type) {
	let storage
	try {
		// Open the storage section of the window element
		// create a item with a string value
		// Attempt to send the item to storage, and remove it.
		// If it succeeds, return true.
		storage = window[type]
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		return true
		//if it fails, catch error
	} catch (e) {
		e instanceof DOMException &&
			// Everything except firefox
			(e.code === 22 ||
				//Firefox
				e.code === 1014 ||
				// test name field too, because code may not be present
				// everything except firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				(e.name === 'NS_ERROR_DOM_QUOTE_REACHED' &&
					// Acknowledge QuoteExceededError only if there's already something stored.
					storage &&
					storage.length !== 0))
	}
}

// Example use:
// "if(StorageAvaible("localStorage)) { Do something}else {Do something else(error?)}
