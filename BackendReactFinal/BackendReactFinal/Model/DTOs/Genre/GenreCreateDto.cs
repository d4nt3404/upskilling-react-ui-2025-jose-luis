using System.ComponentModel.DataAnnotations;

namespace BackendReactFinal.Model.DTOs.Genre
{
    public class GenreCreateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
