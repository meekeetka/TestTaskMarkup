document.addEventListener('DOMContentLoaded', () => {
    const btnTiles = document.getElementById('btn-tiles');
    const btnRows = document.getElementById('btn-rows');
    const contentGrid = document.getElementById('content-grid');

    
    function switchView(activeBtn, inactiveBtn, viewClassToAdd, viewClassToRemove) {
        
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');

        
        contentGrid.classList.add(viewClassToAdd);
        contentGrid.classList.remove(viewClassToRemove);
    }

   
    btnTiles.addEventListener('click', () => {
        switchView(btnTiles, btnRows, 'tiles-view', 'rows-view');
    });

    
    btnRows.addEventListener('click', () => {
        switchView(btnRows, btnTiles, 'rows-view', 'tiles-view');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const fpFrom = flatpickr("#date-from", {
        dateFormat: "d-m-Y",
        allowInput: false,
        onChange: function(selectedDates, dateStr) {
            const wrapper = document.getElementById('date-from').closest('.date-input-container');
            if (dateStr) {
                wrapper.classList.add('has-date');
                
                fpTo.set('minDate', selectedDates[0]);
            } else {
                wrapper.classList.remove('has-date');
            }
        }
    });

   
    const fpTo = flatpickr("#date-to", {
        dateFormat: "d-m-Y",
        allowInput: false,
        onChange: function(selectedDates, dateStr) {
            const wrapper = document.getElementById('date-to').closest('.date-input-container');
            if (dateStr) {
                wrapper.classList.add('has-date');
                
                fpFrom.set('maxDate', selectedDates[0]);
            } else {
                wrapper.classList.remove('has-date');
            }
        }
    });

    
    document.getElementById('clear-from').addEventListener('click', () => {
        fpFrom.clear();
        fpTo.set('minDate', null);
        document.getElementById('clear-from').closest('.date-input-wrapper').classList.remove('has-date');
    });

    document.getElementById('clear-to').addEventListener('click', () => {
        fpTo.clear();
        fpFrom.set('maxDate', null);
        document.getElementById('clear-to').closest('.date-input-wrapper').classList.remove('has-date');
    });
});

const cards = document.querySelectorAll('.content-grid .card'); 
const loadMoreBtn = document.getElementById('btn-load-more');
const maxVisibleCards = 8; 


if (cards.length > maxVisibleCards) {
    cards.forEach((card, index) => {
        if (index >= maxVisibleCards) {
            card.classList.add('is-hidden'); 
        }
    });
} else if (loadMoreBtn) {
    
    loadMoreBtn.style.display = 'none';
}


if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        
        cards.forEach(card => {
            card.classList.remove('is-hidden');
        });
        
        
        loadMoreBtn.parentElement.style.display = 'none'; 
    });
}