interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  className = ""
}: PaginationProps) {
  // Не показуємо пагінацію, якщо тільки одна сторінка
  if (totalPages <= 1) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page);
    }
  };

  // Генеруємо номери сторінок для показу
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // Максимум видимих номерів сторінок

    if (totalPages <= maxVisible) {
      // Якщо сторінок мало, показуємо всі
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Складна логіка для великої кількості сторінок
      if (currentPage <= 3) {
        // Початок: 1, 2, 3, 4, ..., last
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        if (totalPages > 5) pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Кінець: 1, ..., last-3, last-2, last-1, last
        pages.push(1);
        if (totalPages > 5) pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Середина: 1, ..., current-1, current, current+1, ..., last
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className={`flex justify-center items-center ${className}`} aria-label="Пагінація">
      <div className="flex items-center space-x-2">
        {/* Кнопка "Попередня" */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`
            px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1
            ${currentPage === 1 
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
              : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
            }
          `}
          aria-label="Попередня сторінка"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Попередня</span>
        </button>

        {/* Номери сторінок */}
        <div className="flex items-center space-x-1">
          {pageNumbers.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-500">...</span>
              ) : (
                <button
                  onClick={() => handlePageChange(page as number)}
                  className={`
                    px-3 py-2 rounded-lg font-medium transition-all duration-300 min-w-[40px]
                    ${page === currentPage
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 bg-white hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                    }
                  `}
                  aria-label={`Сторінка ${page}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                >
                  {page}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Кнопка "Наступна" */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`
            px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-1
            ${currentPage === totalPages 
              ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
              : 'text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
            }
          `}
          aria-label="Наступна сторінка"
        >
          <span className="hidden sm:inline">Наступна</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Інформація про сторінки (мобільна версія) */}
      <div className="sm:hidden mt-4 text-center text-sm text-gray-600">
        Сторінка {currentPage} з {totalPages}
      </div>
    </nav>
  );
}
