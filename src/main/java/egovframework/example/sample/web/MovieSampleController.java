package egovframework.example.sample.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping(value = "/api")
public class MovieSampleController {

    private static final String LANGUAGE = "ko";
    private static final String API_URL = "https://api.themoviedb.org/3";
    private static final String TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTdiMGQ3OTY0NzkxNzYwMmVkNzJiZjA0ZWYwOGQzNiIsIm5iZiI6MTc0MjE4NDc5Ny4wMSwic3ViIjoiNjdkN2ExNWQyNWYwMWQ1NDE2N2MwZGM3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.J2ctG1LNrnPl89IJj8y95N8oChrC7DuoEgOnL9G8Iks";

    private final HttpClient client = HttpClient.newHttpClient();

    /**
     * 검색
     *
     * @param page
     * @param keyword
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/search/movie")
    public ResponseEntity<Map<String, Object>> getMoviesBy(@RequestParam(required = true) int page,
                                                            @RequestParam(required = true) String keyword) {
        log.info("getMoviesBy => Start");
        try {
            String url = String.format(API_URL + "/search/movie?language=%s&page=%d&query=%s", LANGUAGE, page, URLEncoder.encode(keyword, "UTF-8"));

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getMoviesBy => End");
        }
    }

    /**
     * 목록 조회
     *
     * @param page
     * @param genres
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/discover/movie")
    public ResponseEntity<Map<String, Object>> getdiscoverMoviess(@RequestParam(required = true) int page,
                                                                 @RequestParam(required = false) String genres) {
        log.info("getdiscoverMoviess => Start");
        try {
            String url = String.format(API_URL + "/discover/movie?language=%s&page=%d&with_genres=%s", LANGUAGE, page, genres);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getdiscoverMoviess => End");
        }
    }

    /**
     * 현재 상영중 목록 조회
     *
     * @param page
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/now_playing")
    public ResponseEntity<Map<String, Object>> getNowPlayingMovies(@RequestParam(required = true) int page) {
        log.info("getNowPlayingMovies => Start");
        try {
            String url = String.format(API_URL + "/movie/now_playing?language=%s&page=%d", LANGUAGE, page);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getNowPlayingMovies => End");
        }
    }

    /**
     * 인기 상영중 목록 조회
     *
     * @param page
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/popular")
    public ResponseEntity<Map<String, Object>> getPopularMovies(@RequestParam(required = true) int page) {
        log.info("getPopularMovies => Start");
        try {
            String url = String.format(API_URL + "/movie/popular?language=%s&page=%d", LANGUAGE, page);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getPopularMovies => End");
        }
    }

    /**
     * 개봉 예정 목록 조회
     *
     * @param page
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/upcoming")
    public ResponseEntity<Map<String, Object>> getUpcomingMovies(@RequestParam(required = true) int page) {
        log.info("getUpcomingMovies => Start");
        try {
            String url = String.format(API_URL + "/movie/upcoming?language=%s&page=%d", LANGUAGE, page);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getUpcomingMovies => End");
        }
    }

    /**
     * 높은 평점 목록 조회
     *
     * @param page
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/top_rated")
    public ResponseEntity<Map<String, Object>> getTopRatedMovies(@RequestParam(required = true) int page) {
        log.info("getTopRatedMovies => Start");
        try {
            String url = String.format(API_URL + "/movie/top_rated?language=%s&page=%d", LANGUAGE, page);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getTopRatedMovies => End");
        }
    }

    /**
     * 상세 조회
     *
     * @param id
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/{id}")
    public ResponseEntity<Map<String, Object>> getMovieBy(@PathVariable String id) {
        log.info("getMovieBy => Start");
        try {
            String url = String.format(API_URL + "/movie/%s?language=%s", id, LANGUAGE);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getMovieBy => End");
        }
    }

    /**
     * 트레일러 조회
     *
     * @param id
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/{id}/videos")
    public ResponseEntity<Map<String, Object>> getVideoBy(@PathVariable String id) {
        log.info("getVideoBy => Start");
        try {
            String url = String.format(API_URL + "/movie/%s/videos", id);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getVideoBy => End");
        }
    }

    /**
     * 크레딧 조회
     *
     * @param id
     * @return ResponseEntity<Map < String, Object>>
     */
    @GetMapping("/movie/{id}/credits")
    public ResponseEntity<Map<String, Object>> getCreditBy(@PathVariable String id) {
        log.info("getCreditBy => Start");
        try {
            String url = String.format(API_URL + "/movie/%s/credits?language=%s", id, LANGUAGE);

            HttpRequest request = getHttpRequest(url);
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 200) {
                ObjectMapper mapper = new ObjectMapper();
                Map<String, Object> resultMap = mapper.readValue(response.body(), Map.class);
                return ResponseEntity.status(HttpStatus.OK).body(resultMap);
            }

            return ResponseEntity.status(response.statusCode()).build();
        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } catch (InterruptedException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        } finally {
            log.info("getCreditBy => End");
        }
    }

    private HttpRequest getHttpRequest(String url) {
        return HttpRequest.newBuilder()
                .header("Authorization", "Bearer " + TOKEN)
                .uri(URI.create(url))
                .GET()
                .build();
    }

}