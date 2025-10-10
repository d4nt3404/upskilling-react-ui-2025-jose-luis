using BackendReactFinal.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendReactFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieService _movieService;

        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet("catalog")]
        public async Task<IActionResult> GetMovieCatalog()
        {
            var result = await _movieService.GetMoviesCatalogWithMetadata();
            return Ok(result);
        }

        [HttpGet("catalog/{id}")]
        public async Task<IActionResult> GetMovieData(int id)
        {
            var result = await _movieService.GetMovieWithMetadata(id);
            return Ok(result);
        }
    }
}
