using BackendReactFinal.Model.DTOs.Movie;

namespace BackendReactFinal.Services.Interfaces
{
    public interface IMovieService
    {
        Task<IEnumerable<MovieCatalogResponseDto>> GetMoviesCatalogWithMetadata();
        Task<MovieResponseDto> GetMovieWithMetadata(int movieId);
    }
}
