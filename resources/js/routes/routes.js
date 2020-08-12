import webRoutes from "../modules/main/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import newsRoutes from "../modules/news/routes"

export default [...webRoutes, ...authRoutes, ...userRoutes, ...newsRoutes]