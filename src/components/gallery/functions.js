import transitionEndEventName from 'helpers/transition-end-event-name'

export const galleryFilter = (e, ref, forceCheck) => {
	if(e.target.hasAttribute('data-rel')) {
		const galleryFilterItem  = e.target;
		const galleryFilterItems = galleryFilterItem.parentElement.querySelectorAll('.gallery-filter-item');
		const templateClass      = galleryFilterItem.getAttribute('data-rel');
		const gallery            = ref.current;
		const bundlesPreview     = gallery.querySelectorAll('.gallery-cards-card');
		// Add/remove active class from gallery items
		galleryFilterItems.forEach(item => item.classList.remove('active'))
		galleryFilterItem.classList.add('active');

		// Filter cards
		const transitionEndName = transitionEndEventName();
		// Forcecheck handler
		const handleForceCheck = () => {
			gallery.removeEventListener(transitionEndName, handleForceCheck);
			forceCheck();
		}
		// Filtercards handler
		const filterCardsHandler = () => {
			// Remove gallery transitionend listener
			gallery.removeEventListener(transitionEndName, filterCardsHandler);

			bundlesPreview.forEach(card => {
				if(!card.classList.contains(templateClass)){
					card.style.display = 'none'
				} else {
					card.style.display = 'block'
				}
			});

			gallery.classList.remove('hidden');
			// Add gallery transitionend listener for lazyLoad forceCheck
			gallery.addEventListener(transitionEndName, handleForceCheck);

		}
		gallery.classList.add('hidden');
		gallery.addEventListener(transitionEndName, filterCardsHandler, false);
	}
}