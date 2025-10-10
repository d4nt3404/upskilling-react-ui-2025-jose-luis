using BackendReactFinal.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace BackendReactFinal.DAL
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions <AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Rating> Ratings { get; set; }

        public DbSet<MovieActor> MovieActors { get; set; }
        public DbSet<MovieGenre> MovieGenres { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // MovieActor configuration
            modelBuilder.Entity<MovieActor>()
                .HasKey(ma => new { ma.MovieId, ma.ActorId });

            modelBuilder.Entity<MovieActor>()
                .HasOne(ma => ma.Movie)
                .WithMany(m => m.MovieActors)
                .HasForeignKey(ma => ma.MovieId);

            modelBuilder.Entity<MovieActor>()
                .HasOne(ma => ma.Actor)
                .WithMany(m => m.MovieActors)
                .HasForeignKey(ma => ma.ActorId);

            // MovieActor configuration
            modelBuilder.Entity<MovieGenre>()
                .HasKey(ma => new { ma.MovieId, ma.GenreId });

            modelBuilder.Entity<MovieGenre>()
                .HasOne(ma => ma.Movie)
                .WithMany(m => m.MovieGenres)
                .HasForeignKey(ma => ma.MovieId);

            modelBuilder.Entity<MovieGenre>()
                .HasOne(ma => ma.Genre)
                .WithMany(m => m.MovieGenres)
                .HasForeignKey(ma => ma.GenreId);


        }

        protected AppDbContext()
        {
        }
    }
}
