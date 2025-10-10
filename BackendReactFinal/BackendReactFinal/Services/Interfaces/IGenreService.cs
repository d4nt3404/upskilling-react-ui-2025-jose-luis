using BackendReactFinal.Model.DTOs.Genre;

namespace BackendReactFinal.Services.Interfaces
{
    public interface IGenreService
    {
        Task<IEnumerable<GenreResponseDto>> GetAllGenresAsync();
        Task<GenreResponseDto> GetGenreByIdAsync(int id);
        Task AddGenreAsync(GenreCreateDto dto);
        Task UpdateGenreAsync(GenreUpdateDto dto);
        Task DeleteGenreAsync(int id);
    }
}
